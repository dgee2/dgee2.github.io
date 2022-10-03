---
title: REPL Applications
date: 2016-11-05
author: Daniel Gee
tags:
- Dev
- Useful Software
- REPL
- C#
---

This post will follow the format of giving you some background on what REPL Applications are and then following on with examples of REPL software that I've used in the past.

## Background

Every once in a while I like to write code snippets. (I thought about calling them simple code snippets but to be honest a lot of the time they really aren't that simple...) Commonly I'm working with a file store and attempting to parse a folder and file structure into some meaningful information. This code is generally won't have error checking and most of the time will just ignore the fact that edge cases even exist.

I like to be able to run these snippets simply and preferably in their own setting with little to no dependencies. This allows me to run them quickly while I'm writing the code and not have to worry about any side effects that the production executable may cause, for instance changing the files that we are working on.

This is where a REPL application comes in. REPL stands for Read Evaluate Print Loop and gives us the opportunity to run a set of commands and see the results as we're working. A lot of tools also have the ability to dump out values that may be of interest. All of this helps when writing our code snippet.

## Applications

### [CShell](http://cshell.net)

CShell was my first foray into using REPL software as I was first starting out as a professional C# software developer. I found it easy to use and simple without the clutter of other tools that were available at the time.

The code is written within a workspace that supports both C# script files (.csx) and a standard C# file. This allows the user to copy in larger classes that they may be working on should that help them. It also gives you the opportunity to save a set of "useful" scripts in a workspace for later use.

It is built around the Mono.CSharp engine and so is excellent for developers that are producing software using Mono but even now there are some differences between the Mono and Microsoft compilers. These differences are likely to be reduced with Microsoft open sourcing a lot of their C# code. It would be interesting to see the developers behind CShell supporting the Roslyn compiler as well. I will caution people though that you are unlikely to hit these differences.

### [ScriptCS](http://scriptcs.net)

ScriptCS is a project that I have found literally while writing this post! From a quick play I am really impressed! It is a command line tool but is also available through a browser using [Katacoda](https://www.katacoda.com/courses/dotnet-in-docker/scriptcs-playground) This makes it suitable for situations where you are unable to install applications onto the machine that you are using. In my mind I'm thinking that it would be great in a classroom situation. I'm going to have a further play with this when I get some time and I'll report back in a future post.

### [LINQPad](https://www.linqpad.net)

Written by one of the Albahari family, this is a tool that I find extremely useful. I've used it for everything between trying out simple code ideas through to automating common jobs that I'm required to do at work such as reporting.

Out of the box there is support for C#, F#, VB and several databases and you can then add drivers that give you even more data functionality. I can save common database connections and store queries (LINQPad's name for c# scripts) for later use.

LINQPads Dump command is pretty awesome too. You can put this anywhere (even before a method call!) and the data will be printed in the results window. The results window is pretty awesome as well. You have the ability to drill down into specific properties but collapse any dumps that you're not interested in. It's also very easy to export data to a csv file that you can load into Excel.

The queries themselves can either be run as a main method where you can then declare other methods that can be used or as an expression/set of statements to be evaluated. I have found this flexibility very useful. Generally I start with a single expression and then extend it to statements and then a main method as and when the complexity requires it. I mean we're doing REPL here so we should be keeping it nice and simple.

## Conclusion

I hope this post has given you a bit of background on what REPL applications are and some insight into some that you can try for yourself. Feel free to share this post (Social Media links in the bottom right corner) or send me a message if you've got any comments [@DanielGee](https://twitter.com/DanielGee) Hopefully one day I'll set up a comment board for each post but for the time being Twitter is your friend.
