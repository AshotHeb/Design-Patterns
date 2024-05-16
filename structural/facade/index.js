// These are some of the classes of a complex 3rd-party video
// conversion framework. We don't control that code, therefore
// can't simplify it.

class VideoFile {}
// ...

class OggCompressionCodec {}
// ...

class MPEG4CompressionCodec {}
// ...

class CodecFactory {}
// ...

class BitrateReader {}
// ...

class AudioMixer {}
// ...

//Ֆասադը իր մեջ է հավածում ամբողծ լոգիկան և կապում է մի քանի նմանատիպ class-ները իրար հետ
class VideoConverter {
  convert(filename, format) {
    const file = new VideoFile(filename);

    //Some logic here ...

    return file;
  }
}
