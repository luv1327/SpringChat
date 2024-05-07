package com.spring_chat_server.dtos;

import lombok.Data;

import java.util.Date;

@Data
public class MessageRequestDto {
    private String content;
    private Date date;
    private Long receiverId;
    private Long groupId;
    private Long senderId;
    private String type;
}
