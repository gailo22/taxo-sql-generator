package com.taxo.sql.taxosqlgenerator.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Util {
    static List<String> generateUserIds(String name) throws IOException {
        Path path = Paths.get(".").toAbsolutePath().normalize().resolve(name);
        System.out.println("path: " + path);
        Stream<String> lines = Files.lines(path);

        return lines.map(line -> line.split(",")[0])
                    .filter(userId -> !"UserId".equalsIgnoreCase(userId))
                    .map(userId -> String.format("'%s'", userId))
                    .collect(Collectors.toList());
    }

    static List<String> generateUserIds(MultipartFile file) throws IOException {
        Stream<String> lines = new BufferedReader(new InputStreamReader(file.getInputStream())).lines();

        return lines.map(line -> line.split(",")[0])
                .filter(userId -> !"UserId".equalsIgnoreCase(userId))
                .map(userId -> String.format("'%s'", userId))
                .collect(Collectors.toList());
    }

    static String writeToFile(String SQL_TEMPLATE, List<String> userIds, String fileName) throws IOException {
        String result = getResponseResult(SQL_TEMPLATE, userIds);
        String fileOutput = String.format("%s_%s.sql", fileName, LocalDate.now());
        Files.write(Paths.get(fileOutput), result.getBytes());
        return fileOutput;
    }

    public static String getResponseResult(String SQL_TEMPLATE, List<String> userIds) {
        return SQL_TEMPLATE.replace("${PLACE_HOLDER}", String.join(",", userIds));
    }
}
