package com.userscrud.users_crud_backend.repository;

import com.userscrud.users_crud_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {}