package com.spring_chat_server.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserChatResponseDto {
    private Long id;
    private String name;
    private String avatar;
    private String lastMessage;
    private Date lastMessageDate;
}
