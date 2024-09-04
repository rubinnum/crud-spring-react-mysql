package com.userscrud.users_crud_backend.service;

import com.userscrud.users_crud_backend.exception.UserNotFoundException;
import com.userscrud.users_crud_backend.model.User;
import com.userscrud.users_crud_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User addNewUser(User newUser) {
        userRepository.save(newUser);
        return newUser;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    public User updateUserById(Long id, User newUser) {
        User user = getUserById(id);
        user.setName(newUser.getName());
        user.setUsername(newUser.getUsername());
        user.setEmail(newUser.getEmail());
        userRepository.save(user);
        return user;
    }

    public String deleteUserById(Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " was delete successfully";
    }
}
