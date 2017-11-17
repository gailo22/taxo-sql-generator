package com.taxo.sql.taxosqlgenerator;

import com.taxo.sql.taxosqlgenerator.service.ClassifiedSqlGeneratorService;
import com.taxo.sql.taxosqlgenerator.service.NotClassifiedSqlGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController()
@RequestMapping("/api/v1")
public class TaxoSqlGeneratorController {

    @Autowired
    private ClassifiedSqlGeneratorService classifiedSqlGeneratorService;

    @Autowired
    private NotClassifiedSqlGeneratorService notClassifiedSqlGeneratorService;

    @GetMapping
    @RequestMapping("/hello")
    public String hello() {
        return ResponseEntity.ok("hello").toString();
    }

    @GetMapping
    @RequestMapping("/error")
    public String error() {
        throw new RuntimeException("Error Occurred!!");
    }

    @PostMapping(value = "/classified", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity classified(@RequestPart MultipartFile file) throws IOException {
        String response = classifiedSqlGeneratorService.generate(file);
        ResponseResult responseResult = new ResponseResult.Builder().data(response).build();
        return ResponseEntity.ok(responseResult);
    }

    @PostMapping(value = "/notclassified", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity notClassified(@RequestPart MultipartFile file) throws IOException {
        String response = notClassifiedSqlGeneratorService.generate(file);
        ResponseResult responseResult = new ResponseResult.Builder().data(response).build();
        return ResponseEntity.ok(responseResult);
    }
}
