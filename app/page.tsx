'use client'

import { useState } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { Search, Image as ImageIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Mock data for charts
const wordCountData = [
  { count: '0-5', thumbnails: 30 },
  { count: '6-10', thumbnails: 45 },
  { count: '11-15', thumbnails: 25 },
  { count: '16-20', thumbnails: 15 },
  { count: '20+', thumbnails: 5 },
]

const dominantColorsData = [
  { name: 'Red', value: 30, color: '#FF4136' },
  { name: 'Blue', value: 25, color: '#0074D9' },
  { name: 'Green', value: 20, color: '#2ECC40' },
  { name: 'Yellow', value: 15, color: '#FFDC00' },
  { name: 'Purple', value: 10, color: '#B10DC9' },
]

const facialExpressionsData = [
  { name: 'Happy', value: 40 },
  { name: 'Surprised', value: 20 },
  { name: 'Neutral', value: 15 },
  { name: 'Excited', value: 10 },
  { name: 'Other', value: 15 },
]

const objectLabelsData = [
  { name: 'Person', value: 50 },
  { name: 'Food', value: 30 },
  { name: 'Vehicle', value: 25 },
  { name: 'Electronics', value: 20 },
  { name: 'Animal', value: 15 },
  { name: 'Sports Equipment', value: 10 },
  { name: 'Musical Instrument', value: 8 },
  { name: 'Furniture', value: 7 },
]

const categories = [
  'All',
  'Music',
  'Gaming',
  'Entertainment',
  'Sports',
  'News',
  'Education',
  'Technology',
  'Fashion',
  'Food',
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#ffc658', '#a4de6c']

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <div className="h-screen bg-gray-900 text-white overflow-auto">
      {/* Main Content */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">YouTube Thumbnail Trends Dashboard</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium mb-1">Search</label>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input id="search" placeholder="Search videos or channels" className="pl-8 bg-gray-800 border-gray-700 text-white" />
            </div>
          </div>
          <div className="w-full md:w-64">
            <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category" className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Word Count Chart */}
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-white">Word Count Distribution</CardTitle>
              <CardDescription className="text-gray-300">Number of words in thumbnails</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={wordCountData}>
                  <XAxis dataKey="count" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="thumbnails" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Dominant Colors Chart */}
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-white">Dominant Colors</CardTitle>
              <CardDescription className="text-gray-300">Most common colors in thumbnails</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dominantColorsData}>
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={{ r: 8 }}>
                    {dominantColorsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Facial Expressions Chart */}
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-white">Facial Expressions</CardTitle>
              <CardDescription className="text-gray-300">Common expressions in thumbnails</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={facialExpressionsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {facialExpressionsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                    labelStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Object Labels Chart */}
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-white">Object Labels</CardTitle>
              <CardDescription className="text-gray-300">Common objects detected in thumbnails</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={objectLabelsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {objectLabelsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                    labelStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Thumbnail Gallery */}
        <Card className="mt-6 bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-white">Thumbnail Gallery</CardTitle>
            <CardDescription className="text-gray-300">Recent trending thumbnails</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Analysis Tabs */}
        <Card className="mt-6 bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-white">Detailed Analysis</CardTitle>
            <CardDescription className="text-gray-300">Explore trends in depth</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="wordCount" className="text-white">
              <TabsList className="bg-gray-800">
                <TabsTrigger value="wordCount" className="data-[state=active]:bg-gray-700 text-white">Word Count</TabsTrigger>
                <TabsTrigger value="colors" className="data-[state=active]:bg-gray-700 text-white">Colors</TabsTrigger>
                <TabsTrigger value="expressions" className="data-[state=active]:bg-gray-700 text-white">Expressions</TabsTrigger>
                <TabsTrigger value="objects" className="data-[state=active]:bg-gray-700 text-white">Objects</TabsTrigger>
              </TabsList>
              <TabsContent value="wordCount">
                <p>Detailed word count analysis content goes here.</p>
              </TabsContent>
              <TabsContent value="colors">
                <p>Detailed color analysis content goes here.</p>
              </TabsContent>
              <TabsContent value="expressions">
                <p>Detailed facial expression analysis content goes here.</p>
              </TabsContent>
              <TabsContent value="objects">
                <p>Detailed object detection analysis content goes here.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}