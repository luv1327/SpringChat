package com.spring_chat_server.services;

import com.spring_chat_server.models.User;
import com.spring_chat_server.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    @Override
    public User findByUserName(String username) {
        Optional<User> user =  userRepository.findByUsername(username);
        return user.orElse(null);
    }
}
