from moviepy.editor import *
from pytube import YouTube
import os

# Ruta del archivo de texto con los enlaces de YouTube
input_file = r"C:\Users\CHIAVON\Music\Isa\canciones.txt"

# Carpeta de destino para los archivos de audio
output_folder = r'C:\Users\CHIAVON\Music\Isa'

# Crear la carpeta de destino si no existe
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Leer los enlaces del archivo de texto
with open(input_file, 'r') as file:
    links = file.readlines()

# Descargar los videos y convertirlos a audio
for link in links:
    link = link.strip()  # Eliminar espacios en blanco
    if link:  # Ignorar líneas vacías
        try:
            yt = YouTube(link)
            audio = yt.streams.filter(only_audio=True).first()
            output_path = os.path.join(output_folder, f"{yt.title}.mp3")
            audio.download(output_path=output_path)

            #Suponiendo que 'stream.download()' te devuelve la ruta del archivo descargado
            ruta_archivo = audio.download(output_path=output_path)

            # Cargar el archivo descargado con moviepy
            clip = AudioFileClip(ruta_archivo)

            # Guardar como MP3
            clip.write_audiofile(ruta_archivo.replace('.mp4', '.mp3'))

            # Opcional: eliminar el archivo original si solo quieres el MP3
            os.remove(ruta_archivo)

            print(f"Descarga exitosa: {yt.title}")
        except Exception as e:
            print(f"Error al descargar {link}: {e}")

print("¡Descarga de audio completada!")

