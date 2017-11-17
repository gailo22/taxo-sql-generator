package com.taxo.sql.taxosqlgenerator;

public class ResponseResult {

    private String data;

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public static class Builder {
        private ResponseResult responseResult = new ResponseResult();

        public Builder data(String data) {
            responseResult.data = data;
            return this;
        }

        public ResponseResult build() {
            return responseResult;
        }
    }
}
