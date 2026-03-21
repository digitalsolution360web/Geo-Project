import os
import glob

directories = ['app', 'components']
base_dir = r"f:\Web-New\my-app"

replacements = {
    '#c40902': '#16a34a',
    '#b00802': '#15803d',
    '#a30702': '#166534',
    '#ff2a1f': '#22c55e',
    '196,9,2': '22,163,74',
    'bg-red-': 'bg-green-',
    'text-red-': 'text-green-',
    'border-red-': 'border-green-',
    'from-red-': 'from-green-',
    'via-red-': 'via-green-',
    'to-red-': 'to-green-',
    'ring-red-': 'ring-green-',
    # 'contact@geodecision.com': 'info@geodecisionanalytics.com',
    'Request a consultation': 'Request a Quote'
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for dir_name in directories:
    search_path = os.path.join(base_dir, dir_name, '**', '*.[t|j]s*')
    for filepath in glob.glob(search_path, recursive=True):
        process_file(filepath)
    search_path_css = os.path.join(base_dir, dir_name, '**', '*.css')
    for filepath in glob.glob(search_path_css, recursive=True):
        process_file(filepath)

print("Done.")
