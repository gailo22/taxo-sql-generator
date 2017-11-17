package com.taxo.sql.taxosqlgenerator.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Component
public class NotClassifiedSqlGeneratorService {

    private String SQL_TEMPLATE = "SELECT\n" +
            "    c.IndividualId, \n" +
            "    c.GenderCode,\n" +
            "    c.DateOfBirth,\n" +
            "    c.RaceCode,\n" +
            "    CONCAT(c.EmailAddressLocalPart,c.EmailAddressAtSign,c.EmailAddressDomain) as Email\n" +
            "FROM \n" +
            "     [Msf_Dev_GDC].[dbo].[T_IND_Individual] c\n" +
            "where c.IsDeleted = 0\n" +
            "and c.individualId in ( ${PLACE_HOLDER}\n" +
            ")";

    @Value("${name:}")
    private String name;

    public String generate(MultipartFile file) throws IOException {
        List<String> userIds = Util.generateUserIds(file);
        System.out.println("count: " + userIds.size());

        return Util.getResponseResult(SQL_TEMPLATE, userIds);
    }

}

