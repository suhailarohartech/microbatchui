package com.POC.POC.services;

import com.POC.POC.dto.User;
import com.POC.POC.entity.UserEntity;
import com.POC.POC.repositoris.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
        @Autowired
        UserRepository userRepository;

        public User CreateUser(User user){
            UserEntity userEntity =
                    new UserEntity();
            userEntity.setId(0L);
            userEntity.setName(user.getName());
            userEntity.setMobileNumber(user.getMobileNumber());
            UserEntity userEntityResult =
                    userRepository.save(userEntity);

            User user1 = new User();
            user1.setId(userEntityResult.getId());
            user1.setName(userEntityResult.getName());
            user1.setMobileNumber(userEntityResult.getMobileNumber());
            return user1;
        }
}