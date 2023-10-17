import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';
import { StatusBar } from 'expo-status-bar';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';
import { styles } from '../theme';

const ios = Platform.OS === 'ios';

export default function HomeScreen() {

  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  useEffect(()=>{
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  },[]);

  const getTrendingMovies = async ()=>{
    const data = await fetchTrendingMovies();
    console.log('trend', data.results.length)
    if(data && data.results) setTrending(data.results);
    setLoading(false)
  }
  const getUpcomingMovies = async ()=>{
    const data = await fetchUpcomingMovies();
    console.log('lancamentos', data.results.length)
    if(data && data.results) setUpcoming(data.results);
  }
  const getTopRatedMovies = async ()=>{
    const data = await fetchTopRatedMovies();
    console.log('ir para melhores', data.results.length)
    if(data && data.results) setTopRated(data.results);
  }



  return (
    <View className="flex-1 bg-neutral-800">
      {/* search */}
      <SafeAreaView className={ios? "-mb-2": "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Text 
            className="text-white text-3xl font-bold">
              <Text style={styles.text}>Pobre</Text>Flix
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {
        loading? (
          <Loading />
        ):(
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 10}}
          >

            { trending.length>0 && <TrendingMovies data={trending} /> }


            { upcoming.length>0 && <MovieList title="Em Breve" data={upcoming} /> }
            

            { topRated.length>0 && <MovieList title="Melhores Avaliados" data={topRated} /> }

          </ScrollView>
        )
      }
      
  </View>
      

   
  )
}
