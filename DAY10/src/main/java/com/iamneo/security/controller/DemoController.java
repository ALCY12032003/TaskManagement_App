//package com.iamneo.security.controller;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import lombok.RequiredArgsConstructor;
//
//@RestController
//@RequestMapping("/api/v1/demo")
//@RequiredArgsConstructor
//public class DemoController {
//
//    @GetMapping
//    public ResponseEntity<String> sayHello() {
//        return ResponseEntity.ok("Hello!");
//    }
//}
package com.iamneo.security.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/demo")
@RequiredArgsConstructor
public class DemoController {

    @GetMapping
    public ResponseEntity<String> sayHello(Authentication authentication) {
        // Get the username (name) from the authenticated user's details
        String name = authentication.getName();
        String greeting = "Hello, " + name + "!";
        return ResponseEntity.ok(greeting);
    }
}
