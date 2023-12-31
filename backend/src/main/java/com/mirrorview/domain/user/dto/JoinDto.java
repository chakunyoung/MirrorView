package com.mirrorview.domain.user.dto;

import com.mirrorview.domain.user.domain.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JoinDto {

	private String userId;
	private String username;
	private String nickname;
	private String password;
	private String isOauthUser;
	private String email;
	private String photo;

	public Member toEntity() {
		return Member.builder()
			.userId(userId)
			.username(username)
			.nickname(nickname)
			.password(password)
			.isOauthUser(false)
			.email(email)
			.photo("https://mirror-view.s3.ap-northeast-2.amazonaws.com/defaultimage.png")
			.roles("ROLE_USER")
			.delete(false)
			.build();
	}

	public Member toEntityWithPhoto() {
		return Member.builder()
			.userId(userId)
			.username(username)
			.nickname(nickname)
			.password(password)
			.isOauthUser(true)
			.photo(photo)
			.roles("ROLE_USER")
			.delete(false)
			.build();
	}
}
