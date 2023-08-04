package com.mirrorview.domain.interview.dto;

import java.util.Map;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ApiModel(description = "채팅 메시지 정보")
@ToString
public class MessageDto {
	private String type; // 메시지 타입 (MESSAGE, JOIN, READY, SYSTEM 등)
	private Map<String, Object> data; // 동적으로 변하는 데이터 부분
}
