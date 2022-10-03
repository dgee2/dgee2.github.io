---
title: Update-ModuleManifest and PowerShell 5.0
date: 2018-01-14
author: Daniel Gee
tags:
- PowerShell
- Modules
- PowerShell Gallery
- VSTS
---

I have been doing some work with PowerShell modules recently and have come across a bug in Update-ModuleManifest. I have noticed that for some of my PowerShell modules, PowerShell Gallery was showing the exported functions concatenated together.

Through a lot of hair pulling I found that the Update-ModuleManifest function that I had been using to update the version of the package at build time to add the build number in had also been corrupting some of the other data in the file and effectively collapsing my ExportedFunctions key to a single string. PowerShell Gallery was correctly showing the exported functions as a single string...

This seems to stem from a bug in PowerShell 5.0 and so the solution was to update to PowerShell 5.1. In my case this caused other annoying (but solvable) errors as I had to upgrade my build pipeline to using the VS2017 hosted queues on VSTS. They didn't play well with the tool I was using to run Pester. (You can read more about that [here](https://github.com/rfennell/vNextBuild/issues/243))
