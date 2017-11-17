package com.taxo.sql.taxosqlgenerator;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ExceptionHandlingController {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(Exception.class)
    @ResponseBody
    public ErrorInfo handleError(HttpServletRequest req, Exception ex) {
        return new ErrorInfo(req.getRequestURL().toString(), ex);
    }
}
