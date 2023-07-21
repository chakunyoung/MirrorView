package com.mirrorview.domain.user.service;

import org.springframework.stereotype.Service;

import com.mirrorview.domain.user.domain.Member;
import com.mirrorview.domain.user.dto.JoinDto;
import com.mirrorview.domain.user.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

	private final MemberRepository memberRepository;
	// private final PasswordEncoder passwordEncoder;

	@Override
	public boolean duplicatedUserId(String userId) {
		return memberRepository.existsByUserId(userId);
	}

	@Override
	public void save(JoinDto joinDto) {
		if (duplicatedUserId(joinDto.getUserId())) {
			throw new IllegalArgumentException("아이디 확인이 필요합니다.");
		}
		Member joinMember = joinDto.toEntity();

		memberRepository.save(joinMember);
	}

	@Override
	public boolean duplicatedNickname(String nickname) {
		return memberRepository.existsByNickname(nickname);
	}
}
