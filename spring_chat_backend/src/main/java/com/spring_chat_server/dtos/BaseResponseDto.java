package com.spring_chat_server.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
@AllArgsConstructor
public class BaseResponseDto {
    private String message;
    private BaseDtoStatus status;
//    private boolean maintenance;
    private Map<String,Object> responseData;
    public BaseResponseDto(){
        this.message = "";
        this.status = BaseDtoStatus.success;
//        this.maintenance = false;
        this.responseData = new HashMap<>();
    }
}
