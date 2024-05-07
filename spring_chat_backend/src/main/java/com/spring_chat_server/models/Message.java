package com.spring_chat_server.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "messages")
@Data
public class Message extends BaseModel {
    @Column(name = "sender_id")
    private Long senderId;
    @Column(name = "receiver_id")
    private Long receiverId;
    @Column(nullable = false)
    private String content;
    @Column(nullable = false)
    private Date timestamp;
    private MessageType type;
    public Message(){
        this.type = MessageType.text;
    }

}
