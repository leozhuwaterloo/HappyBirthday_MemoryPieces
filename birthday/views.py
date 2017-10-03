from django.shortcuts import render, HttpResponse, redirect
import os


def main_index(request):
    process_info = {}
    process_info['unity'] = request.session.get("unity", "false")
    process_info['java'] = request.session.get("java", "false")
    process_info['python'] = request.session.get("python", "false")
    process_info['html'] = request.session.get("html", "false")

    if process_info['unity'] == "true" and process_info['java'] == "true" and process_info['python'] == "true" and process_info['html'] == "true":
        process_info['completed'] = "true"

    return render(request, 'birthday/main_index.html', process_info)


def unity(request):
    if request.method == "GET":
        try:
            module_dir = os.path.dirname(__file__)
            file_path = os.path.join(module_dir, '..\BirthdayPresentUnityBuild\BirthdayPresent-CSharp-Unity.exe')
            os.startfile(file_path)
            return HttpResponse("&#31243;&#24207;&#27491;&#22312;&#25171;&#24320;&#20013;&#12290;&#12290;&#12290; <a href='\\'>Back</a>")
        except Exception as e:
            return HttpResponse("<p>" + str(
                e) + "</p><p>&#25991;&#20214;&#25171;&#24320;&#22833;&#36133;&#65292;&#35831;&#23581;&#35797;&#33258;&#34892;&#25171;&#24320;&#12290;</p> <a href='\\'>Back</a>")
    elif request.method == "POST":
        num_pass_unity = request.POST.get("num_pass_unity", "")
        if num_pass_unity == "19":
            request.session['unity'] = "true"
            return render(request, 'birthday/success.html')
        else:
            return render(request, 'birthday/failure.html')


def java(request):
    if request.method == "GET":
        return HttpResponse("&#30001;&#20110;&#25216;&#26415;&#21407;&#22240;&#65292;&#35831;&#33258;&#34892;&#21069;&#24448; HappyBirthday/BirthdayPresent/JavaBirthday/MainBirthday.jar <a href='\\'>Back</a>")
    elif request.method == "POST":
        num_pass_java = request.POST.get("num_pass_java", "")
        if num_pass_java == "18":
            request.session['java'] = "true"
            return render(request, 'birthday/success.html')
        else:
            return render(request, 'birthday/failure.html')


def python(request):
    if request.method == "POST":
        num_pass_unity = request.POST.get("num_pass_python", "")
        if num_pass_unity == "11":
            request.session['python'] = "true"
            return render(request, 'birthday/success.html')
        else:
            return render(request, 'birthday/failure.html')


def html(request):
    if request.method == "POST":
        num_pass_unity = request.POST.get("num_pass_html", "")
        if num_pass_unity == "12":
            request.session['html'] = "true"
            return render(request, 'birthday/success.html')
        else:
            return render(request, 'birthday/failure.html')

def restart(request):
    request.session['unity'] = "false"
    request.session['java'] = "false"
    request.session['python'] = "false"
    request.session['html'] = "false"
    return redirect('/')


def image(request, *args, **kwargs):
    return render(request, 'birthday/image.html', {'year': kwargs.get("year", "")})
