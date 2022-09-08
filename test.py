import os
import shutil

def createFolders(folderName):
  for d in os.listdir(f'{os.getcwd()}\\{folderName}'):
    if d.endswith('.vue'):
      filename = d.replace('.vue', '')
      os.makedirs(f'{os.getcwd()}\\{folderName}\\{filename}')
      shutil.move(f'{os.getcwd()}\\{folderName}\\{filename}.vue', f'{os.getcwd()}\\{folderName}\\{filename}\\{filename}.vue',)
      shutil.move(f'{os.getcwd()}\\{folderName}\\{filename}.stories.ts', f'{os.getcwd()}\\{folderName}\\{filename}\\{filename}.stories.ts',)

createFolders('components\\stories\\templates')