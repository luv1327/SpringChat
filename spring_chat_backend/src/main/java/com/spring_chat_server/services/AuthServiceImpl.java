package com.spring_chat_server.services;

import com.spring_chat_server.dtos.*;
import com.spring_chat_server.models.User;
import com.spring_chat_server.repositories.UserRepo;
import com.spring_chat_server.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService{
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserService userService;
    @Override
    public BaseResponseDto login(LoginRequestDto loginRequestDto) {
        BaseResponseDto baseResponseDto = new BaseResponseDto();
        String username = loginRequestDto.getUsername();
        Optional<User> user = userRepo.findByUsername(username);
        if(user.isPresent()){;
            User foundUser = user.get();
            if(passwordEncoder.matches(loginRequestDto.getPassword(),foundUser.getPassword())){
                getCommonUserDetails(baseResponseDto, foundUser);
                baseResponseDto.setMessage("Logged in successfully!");
            }else{
                baseResponseDto.setStatus(BaseDtoStatus.failed);
                baseResponseDto.setMessage("Login failed. Please check your credentials.");
            }
        }else{
            baseResponseDto.setStatus(BaseDtoStatus.failed);
            baseResponseDto.setMessage("Login failed. Please check your credentials.");
        }
        return baseResponseDto;
    }

    @Override
    public BaseResponseDto signUp(SignUpRequestDto signUpRequestDto) {
        Optional<User> foundUser = userRepo.findByUsername(signUpRequestDto.getUsername());
        BaseResponseDto baseResponseDto = new BaseResponseDto();
        if(foundUser.isEmpty()){
            User user = new User();
            user.setUsername(signUpRequestDto.getUsername());
            user.setAvatarUrl(signUpRequestDto.getAvatarUrl());
            user.setPassword(passwordEncoder.encode(signUpRequestDto.getPassword()));
            User createdUser = userRepo.save(user);
            getCommonUserDetails(baseResponseDto, createdUser);
            baseResponseDto.setMessage("Signed up successfully!");
            return baseResponseDto;
        }else{
            baseResponseDto.setStatus(BaseDtoStatus.failed);
            baseResponseDto.setMessage("Username already exists. Please choose a different one.");
        }
        return baseResponseDto;
    }

    private void getCommonUserDetails(BaseResponseDto baseResponseDto, User createdUser) {
        Map<String,Object> responseData = new HashMap<>();
        responseData.put("jwt",jwtUtil.generateToken(createdUser.getUsername()));
        responseData.put("username",createdUser.getUsername());
        responseData.put("id",createdUser.getId());
        baseResponseDto.setResponseData(responseData);
        baseResponseDto.setStatus(BaseDtoStatus.success);
    }

    @Override
    public BaseResponseDto loginCheck(String token) {
        BaseResponseDto baseResponseDto = new BaseResponseDto();
        if(token == null){
            baseResponseDto.setStatus(BaseDtoStatus.failed);
        }else{
            String parsedToken = token = token.substring(7);
            String username = jwtUtil.extractUsername(parsedToken);
            Optional<User> foundUser = userRepo.findByUsername(username);
            Map<String,Object> responseData = new HashMap<>();
            foundUser.ifPresent(user -> getCommonUserDetails(baseResponseDto, user));
        }
        return baseResponseDto;
    }

    @Override
    public BaseResponseDto logout(LogoutRequestDto logoutRequestDto) {
        BaseResponseDto baseResponseDto = new BaseResponseDto();
        baseResponseDto.setStatus(BaseDtoStatus.success);
        baseResponseDto.setMessage("Logged out successfully.");
        return baseResponseDto;
    }

    @Override
    public List<User> getAllUsers() {
        Long userId = userService.getCurrentUserId();
        return userRepo.findAllByIdIsNot(userId);
    }


    public BaseResponseDto convertEntityToDto(User user){
        return null;
    }
}
