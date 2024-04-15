import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { color } from '../../../contans/color';
import { MaterialCommunityIcons} from '@expo/vector-icons';


const questions = [
  {
    id: 1407,
    prac_id: 960,
    partname: 1,
    examcode: null,
    question: "img",
    questitle: "",
    question_title: "",
    question_guide: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    audio: 17,
    option1: "달력",
    option2: "시계",
    option3: "거울",
    option4: "지도",
    answer: "2"
  },
  {
    id: 1586,
    prac_id: 960,
    partname: 3,
    examcode: null,
    question: "저는 인도네시아에서 왔습니다. 제 space은/는 인도네시아입니다.",
    questitle: "",
    question_title: "",
    question_guide: "[5~8] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    audio: 205,
    option1: "고향",
    option2: "가족",
    option3: "이름",
    option4: "취미",
    answer: "1",
  },
  {
    id: 1866,
    prac_id: 960,
    partname: 9,
    examcode: null,
    question: "n",
    questitle: "다음 표지를 맞게 설명한 것을 고르십시오.",
    question_title: "",
    question_guide: "[9~12] 다음 질문에 답하시오",
    audio: 485,
    option1: "주차 금지 구역이니까 차를 세우면 안 됩니다.",
    option2: "버스 전용 도로니까 자동차가 지나가면 안 됩니다.",
    option3: "지게차를 운전하고 있으니까 가까이 가면 안 됩니다.",
    option4: "한쪽 방향으로만 차가 다니는 길이니까 들어가면 안 됩니다.",
    answer: "4",
  }
];

const ExamQuiz = ({
  route
}) => {
  // console.log(route.params)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handlPrev = () => {
    if(0<currentQuestion) {
      setCurrentQuestion(currentQuestion-1)
    }
  }

  const handlNext = () => {
    if(currentQuestion<(questions.length-1)) {
      setCurrentQuestion(currentQuestion+1)
    }
  }

  const handleAnswerButtonClick = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].answer;
    setUserAnswers([...userAnswers, selectedAnswer]);
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleSubmitButtonClick = () => {
    handleAnswerButtonClick();
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
    setShowScore(false);
  };

  const checkQuestion = questions[currentQuestion].question!='img'&&questions[currentQuestion].question!='n'
  const checkQuestionImg = questions[currentQuestion].question=='img'
  const checkQuestionN = questions[currentQuestion].question=='n'

  return (
    <ScrollView style={{flex: 1, backgroundColor: color.secondary}}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Your Score: {score}</Text>
          <Text style={styles.scoreText}>
            Your answers: {userAnswers.map(answer => `${answer}, `)}
          </Text>
          <Pressable onPress={restartQuiz}>
            <Text>Restart Quiz</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          {/* time */}
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'orange'}}>[</Text>
            <Text style={{paddingStart: 5, paddingEnd: 5, color: color.text_light}}>Thời gian</Text>
            <MaterialCommunityIcons name='clock-outline' color={color.active_color}/>
            <Text style={{paddingStart: 5, paddingEnd: 5, color: color.text_light}}>24:30</Text>
            <Text style={{color: 'orange'}}>]</Text>
          </View>

          {/* Questions */}
          {questions[currentQuestion].question_guide!=''&&<Text style={styles.question_guide}>{questions[currentQuestion].question_guide}</Text>}
          <View style={{borderBottomWidth: 1, borderBottomColor: color.active_color}}></View>
          <View style={styles.questitleView}>
            {questions[currentQuestion].questitle!=''&&<Text style={{color: color.text_light, marginBottom: 5}}>{questions[currentQuestion].questitle}</Text>}
            {checkQuestion&&<View style={styles.question}>
                              <Text style={{color: color.text_light}}>{questions[currentQuestion].question}</Text>
                            </View>}
            {checkQuestionImg&&<Image src={'https://epstopikvn.com/media/img/epstopik/9/19.png'}/>}
          </View>

          {/* Options */}
          <View style={{
                        paddingTop: 10, marginBottom: 5
                      }}>
            <Pressable onPress={() => handleAnswerButtonClick('1')}>
              <View style={styles.option}>
                <Text style={styles.optionL}>1</Text>
                <Text style={styles.optionR}>{questions[currentQuestion].option1}</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handleAnswerButtonClick('2')}>
              <View style={styles.option}>
                <Text style={styles.optionL}>2</Text>
                <Text style={styles.optionR}>{questions[currentQuestion].option2}</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handleAnswerButtonClick('3')}>
              <View style={styles.option}>
                <Text style={styles.optionL}>3</Text>
                <Text style={styles.optionR}>{questions[currentQuestion].option3}</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handleAnswerButtonClick('4')}>
              <View style={styles.option}>
                <Text style={styles.optionL}>4</Text>
                <Text style={styles.optionR}>{questions[currentQuestion].option4}</Text>
              </View>
            </Pressable>
          </View>

          {/* Next, Prev Btn */}
          {((currentQuestion+1) == questions.length)?
          <Pressable style={{
            borderRadius: 5,
            padding: 5,
            paddingStart: 10,
            paddingEnd: 10,
            backgroundColor: color.bg_main
          }} onPress={handleSubmitButtonClick}>
          <Text style={{color: color.text_light, textAlign: 'center'}}>Submit</Text>
        </Pressable>
            :
          <View style={styles.btnGroups}>
            <Pressable style={({pressed})=> [{
              backgroundColor: pressed?color.btn_active:color.btn_bg,
              borderRadius: 5,
              padding: 5,
              paddingStart: 10,
              paddingEnd: 10
            }]} onPress={handlPrev}>
              <Text style={{color: color.text_light}}>Previous</Text>
            </Pressable>
            <Pressable style={({pressed})=> [{
              backgroundColor: pressed?color.btn_active:color.btn_bg,
              borderRadius: 5,
              padding: 5,
              paddingStart: 10,
              paddingEnd: 10
            }]} onPress={handlNext}>
              <Text style={{color: color.text_light}}>Next</Text>
            </Pressable>
          </View>
          }
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    padding: 5,
    paddingTop: 10
    
  },
  question_guide: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
    color: color.info
  },
  questitleView: {
    
  },
  question: {
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: color.active_color,
    borderRadius: 5
  },
  option: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.text_light,
    borderRadius: 5,
    marginBottom: 2
  },
  optionL: {
    borderRightWidth: 2,
    borderRightColor: color.text_light,
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 5,
    paddingStart: 5,
    paddingEnd: 8,
    color: color.text_light,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: color.info
  },
  optionR: {
    paddingStart: 5,
    color: color.text_light,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center'
    },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  btnGroups: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default ExamQuiz;