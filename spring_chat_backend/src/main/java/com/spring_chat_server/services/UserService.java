package com.spring_chat_server.services;

import com.spring_chat_server.models.User;

public interface UserService {
    User findByUserName(String username);
}
