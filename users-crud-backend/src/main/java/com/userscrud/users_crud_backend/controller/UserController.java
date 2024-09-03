package com.userscrud.users_crud_backend.controller;

import com.userscrud.users_crud_backend.model.User;
import com.userscrud.users_crud_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    @ResponseStatus(HttpStatus.CREATED)
    public User addNewUser(@RequestBody User newUser) {
        userRepository.save(newUser);
        return newUser;
    }

    @GetMapping("/users")
    @ResponseStatus(HttpStatus.OK)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
