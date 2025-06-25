package com.example.roles.service;

import com.example.roles.factory.RoleFactory;
import com.example.roles.model.Role;
import com.example.roles.repository.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {
    private final RoleRepository repository;

    public RoleService(RoleRepository repository) {
        this.repository = repository;
    }

    public Role createRole(String name) {
        if (repository.findByName(name).isPresent()) {
            throw new RuntimeException("Rol ya existe");
        }
        Role role = RoleFactory.createRole(name);
        return repository.save(role);
    }

    public List<Role> getAllRoles() {
        return repository.findAll();
    }
}
