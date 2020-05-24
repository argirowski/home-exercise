using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodingExercises
{
    class Program
    {
        static void Main(string[] args)
        {
            //=================================================================================
            //write name in separate lines
            //Console.WriteLine("Hello");
            //Console.WriteLine("My Name is George");
            //Console.ReadLine();

            //=================================================================================
            //sum of numbers
            //var i = 1;
            //var o = 2;
            //Console.WriteLine(i + o);
            //Console.ReadLine();

            //=================================================================================
            //divide numbers
            //var i = 10;
            //var o = 2;
            //Console.WriteLine(i / o);
            //Console.ReadLine();

            //=================================================================================
            //multiple entered numbers            
            //Console.Write("Enter first number ");
            // int num1 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("Enter second number ");
            //int num2 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("Enter third number ");
            //int num3 = Convert.ToInt32(Console.ReadLine());

            //Console.WriteLine(num1 * num2 * num3);
            //Console.ReadLine();

            //=================================================================================
            //multiple operations
            //Console.Write("Enter first number ");
            //int num1 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("Enter second number ");
            //int num2 = Convert.ToInt32(Console.ReadLine());

            //Console.WriteLine("First Number  plus Second number equals " + (num1 + num2));
            //Console.WriteLine("First Number  minus Second number equals " + (num1 - num2));
            //Console.WriteLine("First Number  multiplied by Second number equals " + (num1 * num2));
            //Console.WriteLine("First Number  divided by Second number equals " + (num1 / num2));
            //Console.WriteLine("First Number  modulo Second number equals " + (num1 % num2));
            //Console.ReadLine();

            //=================================================================================
            //multiplication table
            //int num1, increment;
            //Console.Write("Enter first number ");
            //num1 = Convert.ToInt32(Console.ReadLine());
            //for(increment = 0; increment < 11; increment++)
            //{
            //    Console.WriteLine("{0} X {1} = {2} \n", num1, increment, num1 * increment);

            //}
            //Console.ReadLine();

            //=================================================================================
            //calculate average
            //Console.Write("Enter first number ");
            //int num1 = Convert.ToInt32(Console.ReadLine());
            //Console.Write("Enter first number ");
            //int num2 = Convert.ToInt32(Console.ReadLine());
            //Console.Write("Enter first number ");
            //int num3 = Convert.ToInt32(Console.ReadLine());
            //Console.Write("Enter first number ");
            //int num4 = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("The average of all four numbers is " + (num1 + num2 + num3 + num4) / 4 );
            //Console.ReadLine();

            //=================================================================================
            //print age
            //Console.Write("Enter your age ");
            //int age = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("You look much youunger than " + age);
            //Console.ReadLine();

            //=================================================================================
            //rectangle exercise
            //Console.Write("Enter a number ");
            //int num = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("{0}{0}{0}{0}", num);
            //Console.WriteLine("{0} {0}", num);
            //Console.WriteLine("{0} {0}", num);
            //Console.WriteLine("{0}{0}{0}{0}", num);
            //Console.ReadLine();

            //=================================================================================
            //switch first and last characters
            //string str = "GEORGE";
            //string FrontBackString = str.Length >= 2 ?
            //                        str[str.Length - 1] + str.Substring(1, str.Length - 2) + str[0]
            //                        : str;
            //Console.WriteLine(FrontBackString);
            //Console.ReadLine();

            //=================================================================================
            //first character added in the front and back
            //string str;
            //Console.WriteLine("Please enter a word ");
            //str = Console.ReadLine();
            //if(str.Length > 1)
            //{
            //    var subStr = str.Substring(0, 1);
            //    Console.WriteLine(subStr + str + subStr);
            //    Console.ReadLine();
            //}

            //=================================================================================
            //check 2 ints one positive one negative
            //Console.Write("Enter first number ");
            //int num1 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("Enter second number ");
            //int num2 = Convert.ToInt32(Console.ReadLine());

            //if(num1 < 0 && num2 > 0 || num1 > 0 && num2 < 0 )
            //{
            //    Console.WriteLine("True");
            //    Console.ReadLine();
            //} else
            //{
            //    Console.WriteLine("False");
            //    Console.ReadLine();
            //}

            //=================================================================================
            //sum of two given integers, if two values are equal then return the triple of their sum
            //Console.Write("Enter first number ");
            //int num1 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("Enter second number ");
            //int num2 = Convert.ToInt32(Console.ReadLine());

            //if (num1 == num2)
            //{
            //    Console.WriteLine((num1 + num2) * 3 );
            //    Console.ReadLine();
            //}
            //else
            //{
            //    Console.WriteLine((num1 + num2) * 2 );
            //    Console.ReadLine();
            //}

            //=================================================================================
            //return double the absolute value of the difference if the first number is greater than second number.
            //Console.Write("Enter first number ");
            //int num1 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("Enter second number ");
            //int num2 = Convert.ToInt32(Console.ReadLine());

            //if(num1 == num2)
            //{
            //    Console.WriteLine((num1 + num2) * 3);
            //    Console.ReadLine();
            //} else
            //{
            //    Console.WriteLine(num1 + num2);
            //    Console.ReadLine();
            //}

            //=================================================================================
            //return true if one of the integer is 20 or if their sum is 20.
            //Console.Write("Enter first number ");
            //int num1 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("Enter second number ");
            //int num2 = Convert.ToInt32(Console.ReadLine());
            //if(num1 == 20 || num2 == 20 || num1 + num2 == 20)
            //{
            //    Console.WriteLine("True");
            //    Console.ReadLine();
            //} else
            //{
            //    Console.WriteLine("False");
            //    Console.ReadLine();
            //}

            //=================================================================================
            //convert a given string into lowercase.
            //string str;
            //Console.WriteLine("Please enter a word ");
            //str = Console.ReadLine();
            //Console.WriteLine(str.ToLower());
            //Console.ReadLine();

            //=================================================================================
            //find longest word in a string
            //string line;
            //Console.WriteLine("Please write a sentence ");
            //line = Console.ReadLine();
            //string[] words = line.Split(new[] { " " }, StringSplitOptions.None);
            //string word = "";
            //int ctr = 0;
            //foreach (String s in words)
            //{
            //    if (s.Length > ctr)
            //    {
            //        word = s;
            //        ctr = s.Length;
            //        Console.WriteLine(word);
            //    }
            //}
            //Console.ReadLine();

            //=================================================================================
            //print odd numbers
            //for(int i = 1; i <= 100; i++)
            //{
            //    if(i % 2 !=0 )
            //    {
            //        Console.WriteLine(i);
            //    }

            //}
            //Console.ReadLine();

            //=================================================================================
            //reverse words in a string
            //string text = "Hello my name is George Argirowski";
            //Console.WriteLine(string.Join(" ", text.Split(' ').Reverse()));
            //Console.ReadLine();

            //=================================================================================
            //size of a specified file in bytes
            //FileInfo info = new FileInfo("C:/Users/Argirowski/Documents/LinkedIn and CV/JobExtractions.xlsx");
            //Console.WriteLine("The size of the file is {0} bytes", info.Length.ToString());
            //Console.ReadLine();

            //=================================================================================
            //convert hexadecimal to decimal number
            //string hexNum = "48DB";
            //int decNum = Convert.ToInt32(hexNum, 16);

            //Console.WriteLine("The original hexadecimal number is " + hexNum);
            //Console.WriteLine("The decimal value of that number is " + decNum);
            //Console.ReadLine();

            //=================================================================================
            //multiply corresponding elements of two arrays of integers
            //int[] firstArray = { 1, 2, 3, 4, 5 };
            //int[] secondArray = {6, 7, 8, 9, 10};

            //for(int i = 0; i < firstArray.Length; i++)
            //{
            //    Console.WriteLine(firstArray[i] * secondArray[i]);
            //}
            //Console.ReadLine();

            //=================================================================================
            //take last four characters from a given string. If the length of the given string is less than 4 return the original one
            //string line;
            //Console.WriteLine("Please write a sentence ");
            //line = Console.ReadLine();

            //if(line.Length < 4)
            //{
            //    Console.WriteLine(line);
            //} else
            //{
            //    string rem = line.Substring(line.Length - 4);
            //    Console.WriteLine(rem);
            //}
            //Console.ReadLine();

            //=================================================================================
            //check if a given positive number is a multiple of 3 or a multiple of 7
            //Console.Write("Enter first number ");
            //int num1 = Convert.ToInt32(Console.ReadLine());

            //if(num1 % 3 == 0 || num1 % 7 == 0)
            //{
            //    Console.WriteLine("True");
            //} else
            //{
            //    Console.WriteLine("False");
            //}
            //Console.ReadLine();

            //=================================================================================
            //check if a string starts with a specified word.
            //string firstWord;
            //Console.WriteLine("Please write a sentence ");
            //firstWord = Console.ReadLine();
            //string secondWord = "Hello";

            //if(firstWord.StartsWith(secondWord))
            //{
            //    Console.WriteLine("It starts with the specified word");
            //} else
            //{
            //    Console.WriteLine("The words don't match");
            //}
            //Console.ReadLine();

            //=================================================================================
            //check two given numbers where one is less than 100 and other is greater than 200
            //Console.Write("Enter first number ");
            //int num1 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("Enter second number ");
            //int num2 = Convert.ToInt32(Console.ReadLine());

            //if(num1 < 100 && num2 > 200 || num1 > 200 & num2 < 100)
            //{
            //    Console.WriteLine("True");
            //} else
            //{
            //    Console.WriteLine("False");
            //}
            //Console.ReadLine();

            //=================================================================================
            //check if an integer (from the two given integers) is in the range -10 to 10
            //Console.Write("Enter first number ");
            //int num1 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("Enter second number ");
            //int num2 = Convert.ToInt32(Console.ReadLine());

            //if(num1 < 10 && num1 > -10 || num2 < 10 && num1 > -10)
            //{
            //    Console.WriteLine("True");
            //}
            //else
            //{
            //    Console.WriteLine("False");
            //}
            //Console.ReadLine();

            //=================================================================================
            // find the largest and lowest values from three integer values
            //Console.Write("Enter first number ");
            //int num1 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("Enter second number ");
            //int num2 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("Enter third number ");
            //int num3 = Convert.ToInt32(Console.ReadLine());

            //Console.WriteLine("Largest of three: " + Math.Max(num1, Math.Max(num2, num3)));
            //Console.WriteLine("Lowest of three: " + Math.Min(num1, Math.Min(num2, num3)));
            //Console.ReadLine();

            //=================================================================================
            //check if a given string contains ‘w’ character between 1 and 3 times.
            //string line;
            //Console.WriteLine("Please write a sentence ");
            //line = Console.ReadLine();

            //var check = line.Count(i => i == 'w');
            //if(check >= 1 &&  check <= 3)
            //{
            //    Console.WriteLine("The word contains the letter W between 1 and 3 times");
            //} else
            //{
            //    Console.WriteLine("Please try again");
            //}
            //Console.ReadLine();

            //=================================================================================
            //string where the first 4 characters will be in lower case. If the string is less than 4 characters then make the whole string in upper case
            //string line;
            //Console.WriteLine("Please write a sentence ");
            //line = Console.ReadLine();

            //if(line.Length < 4)
            //{
            //    Console.WriteLine(line.ToUpper());
            //} else
            //{
            //    Console.WriteLine(line.Substring(0, 4).ToLower() + line.Substring(4, line.Length - 4));
            //}
            //Console.ReadLine();

            //=================================================================================
            //create a new string of every other character (odd position) from the first position of a given string.
            //string line;
            //Console.WriteLine("Please write a sentence ");
            //line = Console.ReadLine();
            //string count = string.Empty;
            //for(var i = 0; i <= line.Length; i++)
            //{
            //    if(i % 2 == 0)
            //    {
            //        count += line[i];                    
            //    }
            //}
            //Console.WriteLine(count);
            //Console.ReadLine();

            //=================================================================================
            //count a specified number in a given array of integers.
            //Console.Write("Enter a number ");
            //int num = Convert.ToInt32(Console.ReadLine());
            //int[] coll = { 2, 2, 7, 1, 5, 2, 7, 3, 3, 3, 3, 10 };

            //Console.WriteLine("The number " + num + " appears in the string " + coll.Count(n => n == num) + " times");
            //Console.ReadLine();

            //=================================================================================
            //check if a number appears as either the first or last element of an array of integers.
            //Console.Write("Enter a number ");
            //int num = Convert.ToInt32(Console.ReadLine());
            //int[] coll = { 2, 2, 7, 1, 5, 2, 7, 3, 3, 3, 3, 10 };
            //Console.WriteLine((coll[0] == num) || (coll[coll.Length - 1] == num));
            //Console.ReadLine();

            //=================================================================================
            //compute the sum of all the elements of an array of integers.
            //    int[] coll = { 2, 2, 7, 1, 5, 2, 7, 3, 3, 3, 3, 10 };
            //    int num = 0;
            //    for(int i = 0; i < coll.Length; i++)
            //    {
            //        num += coll[i];
            //    }
            //    Console.WriteLine(num);
            //    Console.ReadLine();

            //check if the first element and the last element are equal of an array of integers
            //=================================================================================
            //int[] coll = { 10, 2, 7, 1, 5, 2, 7, 3, 3, 3, 3, 10 };
            //Console.WriteLine(coll[0].Equals(coll[coll.Length - 1]));
            //Console.ReadLine();

            //=================================================================================
            //check if the first element or the last element of the two arrays are equal
            //int[] coll1 = { 1, 2, 7, 1, 5, 2, 7, 3, 3, 3, 3, 10 };
            //int[] coll2 = { 2, 8, 6, 7, 5, 2, 3, 2, 4, 7, 7, 10};
            //Console.WriteLine(coll1[0].Equals(coll2[0]) || coll1[coll1.Length - 1].Equals(coll2[coll2.Length - 1]));
            //Console.ReadLine();

            //=================================================================================
            //check if the first element or the last element of the two arrays are equal
            //get the larger value between first and last element of an array
            //int[] coll = { 1, 2, 7, 1, 5, 2, 7, 3, 3, 3, 3, 10 };
            //Console.WriteLine("\nArray1: [{0}]", string.Join(", ", coll));
            //var result = coll[0];
            //for (var i = 0; i < coll.Length; i++)
            //{
            //    if (coll[i] > coll[0])
            //        result = coll[i];
            //}
            //Console.WriteLine("\nHighest value between first and last values of the said array: {0}", result);
            //Console.ReadLine();

            //=================================================================================
            //check if an array contains an odd number
            //int[] coll = { 1, 2, 7, 1, 5, 2, 7, 3, 3, 3, 3, 10 };
            //        foreach(var i in coll)
            //{
            //    if(i % 2 != 0)
            //    {
            //        Console.WriteLine("This is an odd number");
            //    } else
            //    {
            //        Console.WriteLine("This is NOT an odd number");
            //    }
            //}
            //Console.ReadLine();

            //=================================================================================
            //get the century from a year.
            //Console.Write("Enter a year ");
            //int num = Convert.ToInt32(Console.ReadLine());

            //int century = num / 100 + 1;
            //Console.WriteLine("This is the " + century + " century");
            //Console.ReadLine();

            //=================================================================================
            //check if a given string is a palindrome or not
            //string word;
            //Console.WriteLine("Please write a word ");
            //word = Console.ReadLine();
            //var reversed = new string(word.Reverse().ToArray());
            //if(word == reversed)
            //{
            //    Console.WriteLine("The entered word is a palindrome");
            //} else
            //{
            //    Console.WriteLine("The entered word is NOT a palindrome");
            //}
            //Console.ReadLine();


        }
    }
    }

  