package com.userscrud.users_crud_backend.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long userId) {
        super("User with id " + userId + " was not found");
    }
}
