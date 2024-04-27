package com.spring_chat_server.controllers;

import com.spring_chat_server.dtos.BaseResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {
    @GetMapping("")
    public ResponseEntity<BaseResponseDto> test(){
        return new ResponseEntity<>(new BaseResponseDto(), HttpStatus.OK);
    }
}
