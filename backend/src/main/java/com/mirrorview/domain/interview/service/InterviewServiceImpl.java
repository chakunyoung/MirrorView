package com.mirrorview.domain.interview.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import com.mirrorview.domain.interview.domain.InterviewRoom;
import com.mirrorview.domain.interview.dto.RoomRequestDto;
import com.mirrorview.domain.interview.dto.RoomResponseDto;
import com.mirrorview.domain.interview.repository.InterviewRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class InterviewServiceImpl implements InterviewService {

	private final RedisTemplate<String, InterviewRoom> template;
	private final InterviewRepository interviewRepository;

	@Override
	public List<RoomResponseDto> findRoom() {

		Iterable<InterviewRoom> rooms = interviewRepository.findAll();
		List<RoomResponseDto> result = new ArrayList<>();
		rooms.forEach(room -> {
			if (room != null) {
				RoomResponseDto roomResponseDto = RoomResponseDto.build(room);
				result.add(roomResponseDto);
			}
		});

		return result;
	}

	@Override
	public void create(String nickname, RoomRequestDto requestDto) {
		InterviewRoom createRoom = requestDto.toEntity(nickname);
		createRoom.join(nickname);
		interviewRepository.save(createRoom);
		System.out.println(interviewRepository.count());
	}

	@Override
	@Transactional
	public void exitRoom(String nickname, String roomId) {
		Optional<InterviewRoom> findRoom = interviewRepository.findById(roomId);
		if (findRoom.isPresent()) {
			InterviewRoom interviewRoom = findRoom.get();
			if (interviewRoom.getCurrentCount() == 1) {
				interviewRepository.delete(interviewRoom);
				return;
			}
			interviewRoom.exit(nickname);
			interviewRepository.save(interviewRoom);
			return;
		}
		throw new IllegalArgumentException("잘못된 정보입니다.");
	}
}
