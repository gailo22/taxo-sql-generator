package com.taxo.sql.taxosqlgenerator.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Component
public class ClassifiedSqlGeneratorService {

    private String SQL_TEMPLATE = "SELECT\n" +
            "    a.IndividualId, \n" +
            "    a.JobTitle,\n" +
            "    b.ssocCode,\n" +
            "    c.GenderCode,\n" +
            "    c.DateOfBirth,\n" +
            "    c.RaceCode\n" +
            "FROM [Msf_Dev_GDC].[dbo].[T_IND_Employment] a, \n" +
            "     [Msf_Dev_GDC].[dbo].[T_IND_EmploymentOccupation] b,\n" +
            "     [Msf_Dev_GDC].[dbo].[T_IND_Individual] c\n" +
            "where a.isCurrentJob = 1\n" +
            "and a.IsDeleted = 0\n" +
            "and a.IndividualEmploymentId = b.individualEmploymentId\n" +
            "and a.IndividualId = c.IndividualId\n" +
            "and a.individualId in ( ${PLACE_HOLDER}\n" +
            ")";

    @Value("${name:}")
    private String name;

    public String generate(MultipartFile file) throws IOException {

        List<String> userIds = Util.generateUserIds(file);
        System.out.println("count: " + userIds.size());

        return Util.getResponseResult(SQL_TEMPLATE, userIds);
    }

}

