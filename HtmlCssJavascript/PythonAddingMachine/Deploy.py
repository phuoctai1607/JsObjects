#!/usr/bin/python
'''
Created on May 19, 2012

@author: Charlie Calvert
@attention: Note that this project depends on elfutils.
'''

from elfutils.elffiles import CopyFilesBasePredefined

class CopyFiles(CopyFilesBasePredefined):
    '''
    Deploy the files in this project to a website 
    '''
    
    def __init__(self):
        self.projectName = "AddingMachine/"
        CopyFilesBasePredefined.__init__(self, "../../Deploy.config")
        
    def fineTune(self):
        # Do some special tasks to fine tune this project        
        self.cgiFiles.remove("Deploy.py")
        self.cgiFiles.remove("DeployOld.py")        
        self.scriptPath = "src/"

if __name__ == '__main__':
    copy_files = CopyFiles()
    copy_files.copyFiles(True)