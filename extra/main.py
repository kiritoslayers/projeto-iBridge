def printFormatado():
	print('-'*30)


def cresente():
	print('Exercicio 2 em python')
	lista = [1,9,3,4,5,20,11,30]
	lista.sort()
	print(lista)
	return lista


def decresente():
	print('Exercicio 3 em python')
	lista = [1,9,3,4,5,20,11,30]
	lista.sort(reverse=True)
	print(lista)
	return lista


def frase():
	print('Exercicio 4 em python')
	# Uma das formas é abrindo o arquivo, não sei se você tem o python instalado!
	# with open('frase.txt') as texto:
	# 	leitura = texto.read()
	# 	result = len(leitura)
	# 	return result
	texto = """What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."""
	result = len(texto)
	return result


def subistituirFrase():
	print('Exercicio 5.1 em python')
	texto = "O joão robou pão na casa do marcelo"
	result = texto.replace('marcelo', 'joão')
	return result


def subistituirFrase2():
	print('Exercicio 5.2 em python')
	texto = "O joão robou pão na casa do marcelo"
	result = texto.replace('pão', 'torta')
	return result


def removerPalavra():
	print('Exercicio 5.3 em python')
	texto = "O joão robou pão na casa do marcelo"
	result = texto.replace('joão', '')
	return result
	

def removerPalavraSlice():
	print('Exercicio 5.4 em python')
	texto = "O joão robou pão na casa do marcelo"
	result = texto[0:6]
	return result


def adicionandoTexto():
	print('Exercicio 5.5 em python')
	texto = "O joão robou pão na casa do marcelo"
	concatenacao = " da IBRS"
	result = texto + concatenacao
	return result


def textoSplit():
	print('Exercicio 5.5 em python')
	texto = "O joão robou pão na casa do marcelo"
	concatenacao = "da IBRS"
	result = texto + concatenacao
	return result.split('O joão robou pão na casa do marcelo')
	

def addLista():
	print('Exercico 6 em python')
	lista = ['João','Marcelo','Marcus','Lucas','Nelson']
	lista.append('Azeite')
	return lista


def removeLista():
	print('Exercicio 6.2 em python')
	lista = ['João','Marcelo','Marcus','Lucas','Nelson']
	lista.remove('Marcelo')
	return lista


def ordenaLista():
	print('Exercicio 6.3 em python')
	lista = ['João','Marcelo','Marcus','Lucas','Nelson']
	lista.sort()
	return lista


def tamanhoLista():
	print('Exercicio 6.3 em python')
	lista = ['João','Marcelo','Marcus','Lucas','Nelson']
	return len(lista)


printFormatado()
cresente()
printFormatado()
decresente()
printFormatado()
print(frase())
printFormatado()
print(subistituirFrase())
printFormatado()
print(subistituirFrase2())
printFormatado()
print(removerPalavra())
printFormatado()
print(removerPalavraSlice())
printFormatado()
print(adicionandoTexto())
printFormatado()
print(textoSplit())
printFormatado()
print(addLista())
printFormatado()
print(removeLista())
printFormatado()
print(ordenaLista())
printFormatado()
print(tamanhoLista())
printFormatado()