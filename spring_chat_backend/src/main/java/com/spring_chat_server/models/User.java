package com.spring_chat_server.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User extends BaseModel {
    @Column(nullable = false,name = "username")
    private String username;
    @Column(nullable = false,name = "password")
    private String password;
    public Collection <? extends GrantedAuthority> getAuthorities(){
        return null;
    }
}
