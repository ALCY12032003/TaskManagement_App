package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Feedback;
@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {

}
