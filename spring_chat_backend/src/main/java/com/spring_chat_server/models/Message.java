package com.spring_chat_server.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "messages")
public class Message extends BaseModel {
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User sender;

    @ManyToOne
    @JoinColumn(name = "conversation_id")
    private Conversation conversation;
    @ManyToOne
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom;

    private String content;
    private Date timestamp;

    // Getters and setters
}
