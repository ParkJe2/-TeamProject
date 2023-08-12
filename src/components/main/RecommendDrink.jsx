import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import supabase from 'lib/supabaseClient';
import { St } from './RecommendStyle';

const RecommendDrink = () => {
  const [mood, setMood] = useState();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getDrinks = async () => {
      const { data, error } = await supabase.from('drinks').select();

      if (error) {
        console.log(error);
      }

      if (data) {
        setDrinks(data);
      }
    };

    getDrinks();
  }, []);

  const moodDrinks = drinks.filter((item) => item.mood === `${mood}`);
  const recommendDrink = _.sample(moodDrinks);

  const clickMood = (today) => {
    setMood(today);
  };

  const clickAgain = () => {
    setMood(false);
  };

  return (
    <St.RecommendContainer>
      <St.RecommendTitle>오늘의 나는?</St.RecommendTitle>
      {mood ? (
        <St.DrinkContainder>
          <St.DrinkImgeBox>
            <St.DrinkImg src={recommendDrink.drinkImg} />
          </St.DrinkImgeBox>
          <St.DrinkBody>
            <St.DrinkName>{recommendDrink.name}</St.DrinkName>
            <St.DrinkExplanation>{recommendDrink.explanation}</St.DrinkExplanation>
            <St.AginBtn onClick={clickAgain}>다시 하기</St.AginBtn>
          </St.DrinkBody>
        </St.DrinkContainder>
      ) : (
        <St.MoodContainer>
          <St.MoodSelect onClick={() => clickMood('즐거움')}>
            <St.MoodImgeBox>
              <St.MoodImg src="/즐거움.png" />
            </St.MoodImgeBox>
            <St.MoodTitle>즐거움</St.MoodTitle>
          </St.MoodSelect>
          <St.MoodSelect onClick={() => clickMood('화남')}>
            <St.MoodImgeBox>
              <St.MoodImg src="/화남.png" />
            </St.MoodImgeBox>
            <St.MoodTitle>화남</St.MoodTitle>
          </St.MoodSelect>
          <St.MoodSelect onClick={() => clickMood('설렘')}>
            <St.MoodImgeBox>
              <St.MoodFlutterImg src="/설렘.png" />
            </St.MoodImgeBox>
            <St.MoodTitle>설렘</St.MoodTitle>
          </St.MoodSelect>
          <St.MoodSelect onClick={() => clickMood('뿌듯함')}>
            <St.MoodImgeBox>
              <St.MoodImg src="/뿌듯함.png" />
            </St.MoodImgeBox>
            <St.MoodTitle>뿌듯함</St.MoodTitle>
          </St.MoodSelect>
          <St.MoodSelect onClick={() => clickMood('외로움')}>
            <St.MoodImgeBox>
              <St.MoodImg src="/외로움.png" />
            </St.MoodImgeBox>
            <St.MoodTitle>외로움</St.MoodTitle>
          </St.MoodSelect>
        </St.MoodContainer>
      )}
    </St.RecommendContainer>
  );
};

export default RecommendDrink;
