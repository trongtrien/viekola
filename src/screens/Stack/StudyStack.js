import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from "../../contans/color";
// trang index cua study
import StudyScreen from "../StudyScreen";
// trang index cua voca
import VocaScreen from "../Study/Voca/VocaScreen"
  // trang cua tu vung 60 bai
  import Voca60 from "../Study/Voca/Voca60"
  import VocaDetailt from "../Study/Voca/VocaDetail";
  import Voca60Detailt from "../Study/Voca/Voca60Detailt";

// trang index cua Exam
import ExamScreen from "../Study/Exam/ExamScreen";
  import ExamQuiz from "../Study/Exam/ExamQuiz";

export default function StudyStackScreen() {
  const HomeStack = createNativeStackNavigator();
  const VocaStack = createNativeStackNavigator();
  const ExamStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{headerStyle: {backgroundColor: color.statusbar_bg}, headerTintColor: '#fff'}} name="Màn hình chính" component={StudyScreen} />
          {/* Voca60 */}
            {VocaList.map((voca,index) => <VocaStack.Screen  key={index} options={{title: voca.title,headerStyle: { backgroundColor: color.statusbar_bg},headerTintColor: '#fff'}} name={voca.name} component={voca.component} />)}
          
          {/* Exam */}
          <ExamStack.Screen options={{title: 'Luyện đề',
          headerShown: false,
          headerStyle: {backgroundColor: color.statusbar_bg},headerTintColor: '#fff'}} name="Exam" component={ExamScreen} />
            {/* tung loại */}
                <ExamStack.Screen options={{title: 'Bài: ',headerStyle: {backgroundColor: color.statusbar_bg},headerTintColor: '#fff'}} name="Exam1" component={ExamQuiz} />
                {/* <ExamStack.Screen options={{title: 'Bài: ',headerStyle: {backgroundColor: color.statusbar_bg},headerTintColor: '#fff'}} name="Exam2" component={VocaDetailt} /> */}

    </HomeStack.Navigator>
  );
}

const VocaList = [
  {id: 1, title: 'Từ vựng Eps-topik', name: 'Voca', component: VocaScreen},
  {id: 1, title: 'Từ vựng Eps', name: 'Voca60', component: Voca60},
  {id: 1, title: 'Từ vựng 60 bài', name: 'Voca60Detailt', component: Voca60Detailt},
  {id: 2, title: 'Từ đồng nghĩa', name: 'dongnghia', component: VocaDetailt},
  {id: 3, title: 'Từ trái nghĩa', name: 'trainghia', component: VocaDetailt},
  {id: 4, title: 'Phó từ', name: 'photu', component: VocaDetailt},
  {id: 5, title: 'Số đếm - đơn vị', name: 'sodem', component: VocaDetailt},
  {id: 6, title: 'Từ vựng biểu đồ', name: 'tuvungbieudo', component: VocaDetailt},
  {id: 7, title: 'Từ nối - từ để hỏi', name: 'tunoi-tudehoi', component: VocaDetailt},
  {id: 8, title: 'Màu sắc', name: 'mausac', component: VocaDetailt}
]