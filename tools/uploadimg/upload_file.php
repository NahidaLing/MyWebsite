<?php
// 允许上传的图片后缀
$allowedExts = array("gif", "jpeg", "jpg", "png");
$temp = explode(".", $_FILES["file"]["name"]);
$extension = end($temp);     // 获取文件后缀名
if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/jpg")
|| ($_FILES["file"]["type"] == "image/pjpeg")
|| ($_FILES["file"]["type"] == "image/x-png")
|| ($_FILES["file"]["type"] == "image/png"))
&& ($_FILES["file"]["size"] < 1024000)
&& in_array($extension, $allowedExts))
{
	if ($_FILES["file"]["error"] > 0)
	{
		echo "错误：: " . $_FILES["file"]["error"] . "<br>";
	}
	else
	{
		if (file_exists("/home/vhosts/www.feitu.tk/image/" . $_FILES["file"]["name"]))
		{
			echo $_FILES["file"]["name"] . " 检测到同名文件 ";
		}
		else
		{
			move_uploaded_file($_FILES["file"]["tmp_name"], "/home/vhosts/www.feitu.tk/image/" . $_FILES["file"]["name"]);
			echo "http://".$_SERVER['HTTP_HOST']."/image/". $_FILES["file"]["name"];
		}
	}
}
else
{
	echo "非法的文件格式";
}
?>