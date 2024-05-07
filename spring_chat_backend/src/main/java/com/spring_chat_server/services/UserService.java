package com.spring_chat_server.services;

import com.spring_chat_server.dtos.BaseDtoStatus;
import com.spring_chat_server.dtos.BaseResponseDto;
import com.spring_chat_server.dtos.UserChatResponseDto;
import com.spring_chat_server.models.User;
import com.spring_chat_server.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userDetail = userRepo.findByUsername(username);
        // Converting userDetail to UserDetails
        return userDetail.orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }
    public Long getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof User userDetails) {
            return userDetails.getId();
        }
        return null;
    }

}
