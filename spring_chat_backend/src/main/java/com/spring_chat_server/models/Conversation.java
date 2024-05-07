package com.spring_chat_server.models;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

//@Entity
//@Table(name = "conversations")
//@Data
public class Conversation extends BaseModel {
    @OneToMany(mappedBy = "conversation")
    private List<Message> messages;
    @ManyToMany
    @JoinTable(
            name = "conversation_participants",
            joinColumns = @JoinColumn(name = "conversation_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> participants;

}
