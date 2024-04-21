package com.spring_chat_server.dtos;

import lombok.Data;

@Data
public class UserLoginDto {
    private String username;
    private String password;
}
