package com.spring_chat_server.repositories;

import com.spring_chat_server.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MessageRepo extends JpaRepository<Message, Long> {
    @Query("SELECT m FROM Message m " +
            "WHERE ((m.senderId = :userIdOne AND m.receiverId = :userIdTwo) OR " +
            "(m.senderId = :userIdTwo AND m.receiverId = :userIdOne)) " +
            "AND m.timestamp = (SELECT MAX(m2.timestamp) FROM Message m2 " +
            "WHERE ((m2.senderId = m.senderId AND m2.receiverId = m.receiverId) OR " +
            "(m2.senderId = m.receiverId AND m2.receiverId = m.senderId)))")
    Optional<Message> findLastMessageForUser(Long userIdOne, Long userIdTwo);
    @Query("SELECT m FROM Message m WHERE (m.senderId = :userIdOne AND m.receiverId = :userIdTwo) OR (m.senderId = :userIdTwo AND m.receiverId = :userIdOne) ORDER BY m.timestamp ASC")
    List<Message> findAllMessagesWithUser( Long userIdOne, Long userIdTwo);

}
