import json
from tkinter import *
with open('engineers.json', 'r') as data_file:
	data = json.load(data_file)

def addEntry():
	return

def updateEntry():
	return

def deleteEntry():
	return

def makeWindow():
	global nameVar, phoneVar, select
	win = Tk()

	header = LabelFrame(win)
	header.pack(fill='both', expand='yes')

	headertext = Label(header, text='Add, Remove, and Edit Engineers')
	headertext.pack()

	buttons = Frame(win)
	buttons.pack()
	add = Button(buttons, text = '  Add  ', command = addEntry)
	update = Button(buttons, text = '  Update ', command = updateEntry)
	delete = Button(buttons, text = '  Delete  ', command = deleteEntry)
	add.pack(side=LEFT, padx=10)
	update.pack(side=LEFT, padx=10)
	delete.pack(side=LEFT, padx=10)

	namelist = Frame(win)
	scroll = Scrollbar(namelist, orient = VERTICAL)
	select = Listbox(namelist, yscrollcommand = scroll.set, height = 6)
	scroll.config (command = select.yview)
	scroll.pack(side = RIGHT, fill = Y)
	select.pack(side = LEFT, fill = BOTH, expand = 1)

	return win

def setSelect():
	engineers = []
	
win = makeWindow()
win.mainloop()