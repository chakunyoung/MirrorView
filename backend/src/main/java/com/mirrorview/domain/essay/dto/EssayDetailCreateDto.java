package com.mirrorview.domain.essay.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EssayDetailCreateDto {
    private String question;
    private String answer;
}
