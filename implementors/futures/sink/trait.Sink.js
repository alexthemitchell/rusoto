(function() {var implementors = {};
implementors["rusoto_core"] = ["impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.Framed.html\" title=\"struct tokio_io::length_delimited::Framed\">Framed</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/bytes/0.4/bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","impl&lt;T, D&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_read/struct.FramedRead.html\" title=\"struct tokio_io::framed_read::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a>,&nbsp;</span>","impl&lt;T, E&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_write/struct.FramedWrite.html\" title=\"struct tokio_io::framed_write::FramedWrite\">FramedWrite</a>&lt;T, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_write/trait.Encoder.html\" title=\"trait tokio_io::framed_write::Encoder\">Encoder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","impl&lt;T, U&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed/struct.Framed.html\" title=\"struct tokio_io::framed::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_write/trait.Encoder.html\" title=\"trait tokio_io::framed_write::Encoder\">Encoder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_write/trait.Encoder.html\" title=\"trait tokio_io::framed_write::Encoder\">Encoder</a>&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_write/trait.Encoder.html#associatedtype.Error\" title=\"type tokio_io::framed_write::Encoder::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.FramedRead.html\" title=\"struct tokio_io::length_delimited::FramedRead\">FramedRead</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a>,&nbsp;</span>","impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.FramedWrite.html\" title=\"struct tokio_io::length_delimited::FramedWrite\">FramedWrite</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/bytes/0.4/bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/udp/frame/struct.UdpFramed.html\" title=\"struct tokio_core::net::udp::frame::UdpFramed\">UdpFramed</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/udp/frame/trait.UdpCodec.html\" title=\"trait tokio_core::net::udp::frame::UdpCodec\">UdpCodec</a>,&nbsp;</span>","impl&lt;T, C&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/frame/struct.Framed.html\" title=\"struct tokio_core::io::frame::Framed\">Framed</a>&lt;T, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/frame/trait.Codec.html\" title=\"trait tokio_core::io::frame::Codec\">Codec</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html\" title=\"trait tokio_core::io::Io\">Io</a>,&nbsp;</span>",];
implementors["rusoto_s3"] = ["impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.Framed.html\" title=\"struct tokio_io::length_delimited::Framed\">Framed</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/bytes/0.4/bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","impl&lt;T, D&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_read/struct.FramedRead.html\" title=\"struct tokio_io::framed_read::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a>,&nbsp;</span>","impl&lt;T, E&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_write/struct.FramedWrite.html\" title=\"struct tokio_io::framed_write::FramedWrite\">FramedWrite</a>&lt;T, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_write/trait.Encoder.html\" title=\"trait tokio_io::framed_write::Encoder\">Encoder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","impl&lt;T, U&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed/struct.Framed.html\" title=\"struct tokio_io::framed::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_write/trait.Encoder.html\" title=\"trait tokio_io::framed_write::Encoder\">Encoder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_write/trait.Encoder.html\" title=\"trait tokio_io::framed_write::Encoder\">Encoder</a>&gt;::<a class=\"type\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_write/trait.Encoder.html#associatedtype.Error\" title=\"type tokio_io::framed_write::Encoder::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.FramedRead.html\" title=\"struct tokio_io::length_delimited::FramedRead\">FramedRead</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a>,&nbsp;</span>","impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.FramedWrite.html\" title=\"struct tokio_io::length_delimited::FramedWrite\">FramedWrite</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/bytes/0.4/bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/udp/frame/struct.UdpFramed.html\" title=\"struct tokio_core::net::udp::frame::UdpFramed\">UdpFramed</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/udp/frame/trait.UdpCodec.html\" title=\"trait tokio_core::net::udp::frame::UdpCodec\">UdpCodec</a>,&nbsp;</span>","impl&lt;T, C&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/frame/struct.Framed.html\" title=\"struct tokio_core::io::frame::Framed\">Framed</a>&lt;T, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/frame/trait.Codec.html\" title=\"trait tokio_core::io::frame::Codec\">Codec</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html\" title=\"trait tokio_core::io::Io\">Io</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()