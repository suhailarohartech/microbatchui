package com.POC.POC.resources;

import com.POC.POC.dto.User;
import com.POC.POC.repositoris.UserRepository;
import com.POC.POC.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("api/")
public class UserResources {

    @Autowired
    UserService userService;

    @CrossOrigin(origins = "http" +
            "://localhost:4200")
    @PostMapping("usr")
    ResponseEntity<User> CreateUser(@RequestBody User user){
        System.out.println("User:"+user);
        User userResult =
                userService.CreateUser(user);
        URI location =
                ServletUriComponentsBuilder.fromCurrentRequestUri()
                        .path("{/id}").buildAndExpand(userResult).toUri();
        return ResponseEntity.created(location).body(userResult);
    }
}