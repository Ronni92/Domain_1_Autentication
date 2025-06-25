package com.example.roles.factory;

import com.example.roles.model.Role;

public class RoleFactory {
    public static Role createRole(String roleName) {
        return new Role(roleName);
    }
}
