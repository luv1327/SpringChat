package com.spring_chat_server.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

//@Entity
//@Table(name = "chat_rooms")
//@Data
public class ChatRoom extends BaseModel{
    private String name;
    @ManyToMany
    @JoinTable(
            name = "chat_room_participants",
            joinColumns = @JoinColumn(name = "chat_room_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> users;
    @OneToMany(mappedBy = "chatRoom")
    private List<Message> messages;
}
